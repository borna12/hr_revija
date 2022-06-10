import codecs
BLOCKSIZE = 1048576 # or some other, desired size in bytes

import os
for filename in os.listdir(os.getcwd()+"/knjizaut"):
   with codecs.open("knjizaut/"+filename, "r", "windows-1250") as sourceFile:
    with codecs.open("knjizaut/"+filename.split(".")[0]+".html", "w", "utf-8") as targetFile:
        while True:
            contents = sourceFile.read(BLOCKSIZE)
            if not contents:
                break
            targetFile.write(contents)