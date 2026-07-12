# 替换个人内容

网站已经可以直接运行。姓名、邮箱、NSYSU 学历、Experience、Wins、Skills，以及四类 Projects 已经放入。主要文字资料集中在 `src/App.jsx` 顶部的资料数组中。

## 修改姓名和介绍

打开 `src/App.jsx`，修改：

- `name`
- `role`
- `intro`
- `email`
- `moments`
- `travels`

页面左上角目前显示 `YOUR NAME`，可搜索该文字并替换为你的英文名。

## 替换图片

把自己的图片放进 `public/assets`，保持下面的文件名即可直接覆盖：

- `kaixuan-sketch.png`：首页完整铅笔人物插画
- `id-front.jpg`：悬挂 ID 卡正面
- ID 卡反面现在是网页内的深蓝资料卡，不再使用高铁照片
- `taiwan-shanghai-finance-sketch.png`：台湾—上海双城金融线稿
- `travel-1.jpg` 至 `travel-5.jpg`：旅行和生活照片

Projects 中的部分卡片暂时使用现有图片，空白卡片会显示可替换的 image slot。收到 Data Analysis、AI、股票工具和自办比赛图片后，可在 `src/App.jsx` 的 `projects` 数组替换对应路径。

Market Pulse 视频位于 `public/assets/market-pulse.mp4`。如需更换，保持文件名不变即可覆盖。

也可以在 `src/App.jsx` 的 `data` 对象中改成其他文件名。推荐头像使用 3:4 竖图，旅行照片使用 4:5 竖图。

## 本地运行

在项目文件夹执行 `npm run dev`，浏览器访问显示的本地地址。正式构建使用 `npm run build`。
