# 指定目录路径
directory="../../packages"

# 循环遍历目录中的子文件夹名称
for dir in "$directory"/*/
do
    if [ -d "$dir" ]; then
        # 输出子文件夹名称
        name="$(basename "$dir")"
        if [ -d $directory/$name/docs ] && [ $name != "website" ]; then
            if [ -d ./docs/$name ]; then
              rm -rf ./docs/$name
            fi
            if [ ! -d "./docs" ]; then
                mkdir ./docs/
            fi
            mkdir ./docs/$name/
            cp -rfP $directory/$name/docs/* ./docs/$name/
            # pnpm i @jelper/$name
        fi
    fi
done
