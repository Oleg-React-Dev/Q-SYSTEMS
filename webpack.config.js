const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx", // Точка входа
  devtool: "inline-source-map", // Карты исходного кода для удобной отладки
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Обрабатывает .ts и .tsx файлы
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/, // Обрабатывает .js и .jsx файлы
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Обрабатывает .css файлы
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // Разрешает указанные расширения
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Шаблон HTML для включения скомпилированного кода
    }),
  ],
  output: {
    filename: "bundle.js", // Имя выходного файла
    path: path.resolve(__dirname, "dist"), // Папка, куда будет собран проект
    clean: true, // Очищает папку dist перед сборкой
  },
  devServer: {
    static: path.resolve(__dirname, "dist"), // Статический контент будет храниться в папке dist
    hot: true, // Включает горячую замену модулей
    open: true, // Автоматически открывает браузер
  },
};
