################################################################################
# Author:       Benjamin Hobbs
# Date:         11/18/2015
# Description:  Read data from emf detector.  Prints to stout.  Should restart
#               on disconnect.
#
################################################################################

#!/usr/bin/env python

import serial
import time
import datetime
import json
import math

def parsePayload(verbose,cmd,byteList):
    for index,byte in enumerate(byteList):  # convert all hex bytes to binary
        byteList[index] = "{0:08b}".format(int(byte,16))

    dateStr = str(byteList[7]) + str(byteList[6])
    timeStr = str(byteList[10])[7:] + str(byteList[9]) + str(byteList[8])   # 17th char
    statusStr = str(byteList[10])[:7]

    pl = {
        "cmd" : cmd,
        "X" : str(int(str(byteList[1]) + str(byteList[0]),2)),
        "Y" : str(int(str(byteList[3]) + str(byteList[2]),2)),
        "Z" : str(int(str(byteList[5]) + str(byteList[4]),2)),
        "Year"   : str(int(dateStr[:7],2)),
        "Month"  : str(int(dateStr[7:11],2)),
        "Day"    : str(int(dateStr[11:],2)),
        "Hour"   : str(int(timeStr[:5],2)),
        "Minute" : str(int(timeStr[5:11],2)),
        "Second" : str(int(timeStr[11:],2)),
        "ZR" : str(int(statusStr[:2],2)),
        "YR" : str(int(statusStr[2:4],2)),
        "XR" : str(int(statusStr[4:6],2)),
        "UU" : str(int(statusStr[6:],2))
        }
    
    # Set correct decimal place
    pl["X"] = str(float(pl["X"]) * math.pow(10,(float(pl["XR"])-2-float(pl["UU"]))))
    pl["Y"] = str(float(pl["Y"]) * math.pow(10,(float(pl["YR"])-2-float(pl["UU"]))))
    pl["Z"] = str(float(pl["Z"]) * math.pow(10,(float(pl["ZR"])-2-float(pl["UU"]))))

    # Set correct unit
    pl["Unit"] = "mG" if pl["UU"] == "0" else "uT"

    if verbose:
        print("Packet Payload Summary")
        print("Command: " + pl['cmd'])
        print("X: " + pl['X'] + pl['Unit'] + "\tY: " + pl['Year'] + "\tH: " + pl['Hour'])
        print("Y: " + pl['Y'] + pl['Unit'] + "\tM: " + pl['Month'] + "\tM: " + pl['Minute'])
        print("Z: " + pl['Z'] + pl['Unit'] + "\tD: " + pl['Day']  + "\tS: " + pl['Second'])
        print("Status:")
        print("UU: " + pl['UU'])
        print("XR: " + pl['XR'] + "\tYR: " + pl['YR'] + "\tZR: " + pl['ZR'])    

    return pl

# For testing purposes
#testList = ['7b','00','c8','01','15','03','61','0e','02','61','26']
#parsePayload(True,"Test",testList)

def emfreader(verbose):
    myBaudrate = 38400
    myBytesize = serial.EIGHTBITS
    myParity = serial.PARITY_NONE
    myStopbits = serial.STOPBITS_ONE

    usb = serial.Serial("/dev/ttyUSB0",
        baudrate=myBaudrate,
        bytesize=myBytesize,
        parity=myParity,
        stopbits=myStopbits)

    packet = False
    request = False
    previous_tick = current_tick = ""
    cmd = ""
    byteList = []

    count = -1

    if verbose:
        print("Running:\n\tSerial Port: " + usb.name)

    while True:
        raw_tick = usb.read()
        raw_tick = raw_tick.encode('hex')

        previous_tick = current_tick
        current_tick = raw_tick

        if current_tick == "01" and not packet:
            if verbose:
                print("0x" + current_tick + "<-Request")
            request = True          # set request to True, will be unset in command section
        elif previous_tick == "01" and request: # command selection section
            if current_tick == "44":
                cmd = "Report EMF Data"
                if verbose:
                    print("0x" + current_tick + "<-Command (" + cmd + " - Payload 11 bytes)")
                    print("Start Payload")
                count = 0   # start the count for the payload
                packet = True   # set packet status
            elif current_tick == "4e":
                cmd = "Report Minimum EMF Data"
                if verbose:
                    print("0x" + current_tick + "<-Command (" + cmd + " - Payload 11 bytes)")
                    print("Start Payload")
                count = 0
                packet = True
            elif current_tick == "58":
                cmd = "Report Maximum EMF Data"
                if verbose:
                    print("0x" + current_tick + "<-Command (" + cmd + " - Payload 11 bytes)")
                    print("Start Payload")
                count = 0
                packet = True
            request = False     # unset the request bool
        elif packet:    # we are in the payload stage
            if count > -1 and count < 11:
                byteString = "{0:08b}".format(int(current_tick,16)) # build bin str
                if verbose:
                    print("->0x" + current_tick + ":" + byteString)
                byteList.append(current_tick)
                byteString = ""         # empty byte string for next iteration
                count += 1          # increase the count
            elif count == 11:
                payloadInfo = parsePayload(verbose,cmd,byteList)    # parse info
                print json.dumps(payloadInfo)

                if verbose:
                    print("End Payload")
                    print("0x" + current_tick + "<-CRC")
                
                # reset all vars
                byteList = []
                count = -1
                packet = False
                cmd = ""
        else:
            if verbose:
                print("0x" + current_tick + "<-NOT ATTACHED TO A PACKET")

# brute force runner
while True:
  try:
    emfreader(false)
  except Exception as e: 
    print e
    time.sleep(5)