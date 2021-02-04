# encoderdecoder
encoding and decoding algorithms
Encode the image file into base64, hexadecimal formats
from terminal type the command
xxd -p <<< "Blockchain Developer"

This will give the hexadecimal string :426c6f636b636861696e20446576656c6f7065720a

Then type this command to get the original string back
echo 426c6f636b636861696e20446576656c6f7065720a | xxd -r -p

from file to file:
xxd -p encodedata.txt dataencoded.txt

xxd -p -dataencoded.txt datadecodec.txt

Image file encoded:
xxd -p Agastya.JPG  AgastyaEncoded.txt