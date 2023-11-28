
# 指定目录路径
directory="../../docs"

if [ -d $directory ]; then
  rm -rf $directory
fi
mkdir $directory
cp -rfP ./build/* $directory
