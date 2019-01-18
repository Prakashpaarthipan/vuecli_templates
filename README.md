# vuecli_demo
'''
Only gor beginners:-
'''
if you're in college or tech park or struggling to install vue cli /cli ui read my instruction here
'''
require node and npm with path settings
'''
1.download https://github.com/vuejs/vue-cli 
'''
2.Inside git repo find package folder
'''
3.inside package folder copy @vue 
'''
4.paste it c:/users/{username}/appdata/roaming/npm
'''
5.create batch file vue.bat
'''
6 paste the following code
'''
 <code>
  @IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\@vue\cli\bin\vue" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\@vue\cli\bin\vue" %*
)
  </code>
  '''
  7.thats it.
  '''
  open cmd
  type vue or vue ui
  Note: It is fresh template for vue cli

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
