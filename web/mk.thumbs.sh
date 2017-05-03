#! /bin/bash

for i in *.jpg; do
    if [ "$i" -nt "../thumbs/$i" ]; then
        #convert "$i" -thumbnail 100x100 "./thumbs/$i";
        convert "$i" -thumbnail x200 "./thumbs/$i";
    fi
done;
