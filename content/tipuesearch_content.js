var tipuesearch = {"pages": [{'title': 'About', 'text': 'https://hsiaoyu-sen.github.io/cad2023 \n https://s1511.cycu.org/~cad41123149/cad2023 \n \n', 'tags': '', 'url': 'About.html'}, {'title': '進度', 'text': '', 'tags': '', 'url': '進度.html'}, {'title': 'w4', 'text': '建立考試帳號 \n 利用replit把github更新並推送更新內容 \n 選用繪圖軟體(Solidworks) \n', 'tags': '', 'url': 'w4.html'}, {'title': 'w5', 'text': '學習如何使用 CoppeliaSim，並練習操作。 \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '進行九人分組 \n 獲取CoppeliaSim展示用IPv6位址 \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '學習使用透過localhost方式更新github \n 獲取新的教室網路設定檔案 \n 開始繪製任務一零件 \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w8', 'text': '學習使用自架主機維護網站 \n 並進行第一次考試 \n', 'tags': '', 'url': 'w8.html'}, {'title': 'w9', 'text': '期中考', 'tags': '', 'url': 'w9.html'}, {'title': 'w10', 'text': '講解wink使用方法', 'tags': '', 'url': 'w10.html'}, {'title': 'w11', 'text': '運動會', 'tags': '', 'url': 'w11.html'}, {'title': 'w12', 'text': '按順序填寫座位表', 'tags': '', 'url': 'w12.html'}, {'title': 'w13', 'text': 'acp錄影 \n \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w14', 'text': '老師對我們的網站進行評分', 'tags': '', 'url': 'w14.html'}, {'title': 'w15', 'text': '考試:20', 'tags': '', 'url': 'w15.html'}, {'title': 'w16', 'text': '考試:65', 'tags': '', 'url': 'w16.html'}, {'title': 'w17', 'text': '考試 第一次:75 \n \xa0 \xa0 \xa0 \xa0第二次:20', 'tags': '', 'url': 'w17.html'}, {'title': 'exam', 'text': '組員:41123135 黃昱閔', 'tags': '', 'url': 'exam.html'}, {'title': '零組件繪圖', 'text': '圖檔', 'tags': '', 'url': '零組件繪圖.html'}, {'title': '任務一', 'text': '零組件檔案 \n \n', 'tags': '', 'url': '任務一.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};