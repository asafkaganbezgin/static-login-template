# Static Login Template

Simple static login page template with VanillaJS & SCSS.

In order to run the run the template, you have to create a server in your local machine. One easy way is to install **live server extension** in to VSCode. After installing the extension, click on the go live button located in the bottom right of the code editor. If the template does not open automatically, navigate to

> /localhost:{port_number_generated_by_live_server_extension}

from your favorite browser. If you first see a file system, navigate in to the _src_ folder.

Another solution could be setting up a connection on your own.

## SCSS

Initially you are going to see the template with the corresponding styling. However, if you want to make additional changes, you have to enter sass command in the terminal to watch the changes you are making in the main .scss file. In order to do that, navigate in to the _styles_ folder under _src_ from terminal. Then enter command:

    sass --watch style.scss style.css

In order to globally use sass command, you have to download it locally in your computer. **For windows operating systems, you might have to give permission from the windows powershell as an administrator in order to use sass command in the terminal.**
