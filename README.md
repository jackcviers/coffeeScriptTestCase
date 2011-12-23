According to https://github.com/playframework/Play20/wiki/AssetsCoffeeScript

> Compiled assets in Play 2.0 must be defined in the app/assets directory. They are handled by the build process, and CoffeeScript sources are compiled into standard JavaScript files. The generated JavaScript files are distributed as standard resources into the same public/ folder as other unmanaged assets, meaning that there is no difference in the way you use them once compiled.
>
> >Note that managed resources are not copied directly into your application’s public folder, but maintained in a separate folder in target/scala-2.9.1/resources_managed.
>
> For example a CoffeeScript source file app/assets/javascripts/main.coffee will be available as a standard JavaScript resource, at public/javascripts/main.js.
>
>CoffeeScript sources are compiled automatically during a compile command, or when you refresh any page in your browser while you are running in development mode. Any compilation errors will be displayed in your browser:

According to https://github.com/playframework/Play20/wiki/AssetsGoogleClosureCompiler

> Any JavaScript file present in app/assets will be parsed by Google Closure compiler, checked for errors and dependencies and minified if activated in the build configuration.

Because the app/assets/javascripts/main.coffee is compiled, and "copied" into the target/scala-2.9.1/resources_managed this implies that coffeescripts compiled into javascripts will be parsed by the Google Closure compiler. The test case in this github repo shows that this doesn't happen.