# git-config

git config --global user.name “имя”
git config --global user.email “почта”


git config --global core.safecrlf warn
git config --global core.quotepath off
git config --global init.defaultBranch main # Ветка по умолчанию

git init # инициализация репозитория 
git add . #добавить все файлы в трек 
git commit -m "описание" # сделать комит
git status # показывает текущий статус
git diff # показывает текущие изменения 
git diff --color -words #более развернута 
git checkout . # вернуться к последнему комиту 

