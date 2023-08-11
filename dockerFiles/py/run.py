import sys
import subprocess

lang = sys.argv[1]
script = sys.argv[2]

if lang != "py":
    print("only accepting py code")
else:
    try:
        subprocess.run(["python", "-c", script], check=True)
        print("finish")
    except subprocess.CalledProcessError as e:
        print(e)
        print("error")
