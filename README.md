# 呂翼 A-yi Lu · 個人網站

## 檔案說明
- `content.js`：**所有文字都在這裡**，要改內容就改這個檔案
- 圖片檔（.jpg / .webp）：照片與背景圖，換圖時檔名保持一樣就好
- `index.html`、`style.css`、`main.js`：版面與效果，一般不用動

## 怎麼改文字
1. 在 GitHub 打開 `content.js`，按右上角的鉛筆 ✏️
2. 只改引號 `' '` 裡面的字，中文版（zh）和英文版（en）要一起改
3. 按綠色的 **Commit changes**，大約 1 分鐘後網站就會更新

## 怎麼換照片
在檔案列表按 **Add file → Upload files**，上傳同名檔案（例如 `portrait.jpg`）就會覆蓋舊的。

## 加上 LinkedIn
在 `content.js` 找到 `linkedin: ''`，把網址貼在引號中間，例如：
`linkedin: 'https://www.linkedin.com/in/你的帳號/',`

## 經歷加「了解更多」頁面
在 `content.js` 的經歷裡，某一筆加上 `page: 'pages/scouting.html'`，那一筆下面就會出現「了解更多 →」。
頁面內容寫好後跟 Claude 說，就能做成同樣風格的新頁面。
