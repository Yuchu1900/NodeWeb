/**
 * pre-commit的使用
 * pre-commit可以在我们提交代码到git之前，做一些事，比如我们在提交前，想让没有通过eslint格式检查的代码不能提交。
 * 1.安装pre-commit，在终端中输入：npm i pre-commit --save-dev
 * 2.打开package.json，如果工程中没有这个文件，就在终端运行：npm init
 *  加入配置；
    "scripts": {
        "test": "test",
        "lint": "eslint .",
        "fix": "eslint --fix ."
    },
    "pre-commit": [
        "fix",
        "lint"
    ],
    其中"scripts"中配置的"lint": "eslint ."表示执行eslint检查的命令，可以在终端输入：npm run lint来执行这条命令；
    同样的"fix": "eslint --fix ."表示执行命令：自动修复由eslint检查发现的格式问题，也可以在终端输入:npm run fix来执行这条命令。
    "pre-commit"中配置的"fix"对应上面"scripts"配置的"fix"命令，这个命名会在我们提交代码到git之前执行，
    也就是说在提交代码到git之前，会先尝试修复一下eslint查找出来的问题，如果修复不了，那么就不能提交代码到git。
 *
 */
