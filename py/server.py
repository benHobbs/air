################################################################################
# Author:   Benjamin Hobbs
# Date:     9/10/2015
# Description:  ...
#               ...
################################################################################

#!/usr/bin/python

import json
import time
import datetime

i = 0

while True:
  theDate = datetime.datetime.now()
  pl = {
      "cmd" : "fish",
      "X" : str(i),
      "Y" : str(i),
      "Z" : str(i),
      "Year"   : str(theDate.year),
      "Month"  : str(theDate.month),
      "Day"    : str(theDate.day),
      "Hour"   : str(theDate.hour),
      "Minute" : str(theDate.minute),
      "Second" : str(theDate.second),
      "ZR" : str(i),
      "YR" : str(i),
      "XR" : str(i),
      "UU" : str(i)
      }

  print json.dumps(pl)
  time.sleep(0.25)
  i += 1