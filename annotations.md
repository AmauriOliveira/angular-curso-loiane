# Manual

**add** Adds support for an external library to your project.
**analytics** Configures the gathering of Angular CLI usage metrics. See <https://angular.io/cli/usage-analytics-gathering>.
**build (b)** Compiles an Angular app into an output directory named dist/ at the given output path. Must be executed from within a workspace directory.
**deploy** Invokes the deploy builder for a specified project or for the default project in the workspace.
**config** Retrieves or sets Angular configuration values in the angular.json file for the workspace.
**doc (d)** Opens the official Angular documentation (<https://angular.io>) in a browser, and searches for a given keyword.
**e2e (e)** Builds and serves an Angular app, then runs end-to-end tests.
**extract-i18n (i18n-extract, xi18n)** Extracts i18n messages from source code.
**generate (g)** Generates and/or modifies files based on a schematic.
**help** Lists available commands and their short descriptions.
**lint (l)** Runs linting tools on Angular app code in a given project folder.
**new (n)** Creates a new workspace and an initial Angular application.
**run** Runs an Architect target with an optional custom builder configuration defined in your project.
**serve (s)** Builds and serves your app, rebuilding on file changes.
**test (t)** Runs unit tests in a project.
**update** Updates your application and its dependencies. See <https://update.angular.io/>
**version (v)** Outputs Angular CLI version.

## ng new

Creates a new workspace and an initial Angular application.

```bath
ng new <name> [options]
```

```bath
ng n <name> [options]
```

| OPTION               | DESCRIPTION                                                                                                                                                                                                                                                           | VALUE TYPE                     | DEFAULT VALUE |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------------- |
| --collection         | A collection of schematics to use in generating the initial application. Aliases: -c                                                                                                                                                                                  | string                         |               |
| --commit             | Initial git repository commit information.                                                                                                                                                                                                                            | boolean                        | true          |
| --create-application | Create a new initial application project in the 'src' folder of the new workspace. When false, creates an empty workspace with no initial application. You can then use the generate application command so that all applications are created in the projects folder. | boolean                        | true          |
| --defaults           | Disable interactive input prompts for options with a default.                                                                                                                                                                                                         | boolean                        |               |
| --directory          | The directory name to create the workspace in.                                                                                                                                                                                                                        | string                         |               |
| --dry-run            | Run through and reports activity without writing out results. Aliases: -d                                                                                                                                                                                             | boolean                        | false         |
| --force              | Force overwriting of existing files. Aliases: -f                                                                                                                                                                                                                      | boolean                        | false         |
| --help               | Shows a help message for this command in the console.                                                                                                                                                                                                                 | true/false/json/JSON           | false         |
| --inline-style       | Include styles inline in the component TS file. By default, an external styles file is created and referenced in the component TypeScript file. Aliases: -s                                                                                                           |                                | boolean       |
| --inline-template    | Include template inline in the component TS file. By default, an external template file is created and referenced in the component TypeScript file.Aliases: -t                                                                                                        |                                | boolean       |
| --interactive        | Enable interactive input prompts.                                                                                                                                                                                                                                     |                                | boolean       |
| --legacy-browsers    | Add support for legacy browsers like Internet Explorer using differential loading.                                                                                                                                                                                    | boolean                        | false         |
| --minimal            | Create a workspace without any testing frameworks. (Use for learning purposes only.)                                                                                                                                                                                  | boolean                        | false         |
| --new-project-root   | The path where new projects will be created, relative to the new workspace root.                                                                                                                                                                                      | string                         | projects      |
| --package-manager    | The package manager used to install dependencies.                                                                                                                                                                                                                     | npm/yarn/pnpm/cnpm             |               |
| --prefix             | The prefix to apply to generated selectors for the initial project. Aliases: -p                                                                                                                                                                                       | string                         | app           |
| --routing            | Generate a routing module for the initial project.                                                                                                                                                                                                                    | boolean                        |               |
| --skip-git           | Do not initialize a git repository. Aliases: -g                                                                                                                                                                                                                       | boolean                        | false         |
| --skip-install       | Do not install dependency packages.                                                                                                                                                                                                                                   | boolean                        | false         |
| --skip-tests         | Do not generate "spec.ts" test files for the new project. Aliases: -S                                                                                                                                                                                                 | boolean                        | false         |
| --strict             | Creates a workspace with stricter type checking and stricter bundle budgets settings. This setting helps improve maintainability and catch bugs ahead of time. For more information, see https://angular.io/strict                                                    | boolean                        | false         |
| --style              | The file extension or preprocessor to use for style files.                                                                                                                                                                                                            | css/scss/sass/less/styl        |               |
| --verbose            | Add more details to output logging. Aliases: -v                                                                                                                                                                                                                       | boolean                        | false         |
| --view-encapsulation | The view encapsulation strategy to use in the initial project.                                                                                                                                                                                                        | Emulated/Native/None/ShadowDom |               |

## ng g c

Generates and/or modifies files based on a schematic.
usage: ng generate <schematic> [options]

arguments:
schematic
The schematic or collection:schematic to generate.

options:
--defaults
Disable interactive input prompts for options with a default.
--dry-run (-d)
Run through and reports activity without writing out results.
--force (-f)
Force overwriting of existing files.
--help
Shows a help message for this command in the console.
--interactive
Enable interactive input prompts.

Available Schematics:
Collection "@schematics/angular" (default):
app-shell
application
class
component
directive
enum
guard
interceptor
interface
library
module
pipe
resolver
service
service-worker
web-worker

> Error: More than one module matches. Use the skip-import option to skip importing the component into the closest module or use the module option to specify a module.

use

```bash
ng g c new-component --module app
```

or

```bash
ng g c component-name --module ../
```

## ng Builds and serves your app, rebuilding on file changes.

usage: ng serve <project> [options]

arguments:
project
The name of the project to build. Can be an application or a library.

options:
--allowed-hosts
List of hosts that are allowed to access the dev server.
--aot
Build using Ahead of Time compilation.
--base-href
Base url for the application being built.
--browser-target
A browser builder target to serve in the format of `project:target[:configuration]`. You can also pass in more than one configuration name as a comma-separated list. Example: `project:target:production,staging`.
--common-chunk
Generate a seperate bundle containing code used across multiple bundles.
--configuration (-c)
One or more named builder configurations as a comma-separated list as specified in the "configurations" section of angular.json.
The builder uses the named configurations to run the given target.
For more information, see https://angular.io/guide/workspace-config#alternate-build-configurations.
Setting this explicitly overrides the "--prod" flag.
--deploy-url
URL where files will be deployed.
--disable-host-check
Don't verify connected clients are part of allowed hosts.
--help
Shows a help message for this command in the console.
--hmr
Enable hot module replacement.
--hmr-warning
Show a warning when the --hmr option is enabled.
--host
Host to listen on.
--live-reload
Whether to reload the page on change, using live-reload.
--open (-o)
Opens the url in default browser.
--optimization
Enables optimization of the build output. Including minification of scripts and styles, tree-shaking, dead-code elimination, tree-shaking and fonts inlining. For more information, see https://angular.io/guide/workspace-config#optimization-configuration.
--poll
Enable and define the file watching poll time period in milliseconds.
--port
Port to listen on.
--prod
Shorthand for "--configuration=production".
Set the build configuration to the production target.
By default, the production target is set up in the workspace configuration such that all builds make use of bundling, limited tree-shaking, and also limited dead code elimination.
--progress
Log progress to the console while building.
--proxy-config
Proxy configuration file. For more information, see https://angular.io/guide/build#proxying-to-a-backend-server.
--public-host
The URL that the browser client (or live-reload client, if enabled) should use to connect to the development server. Use for a complex dev server setup, such as one with reverse proxies.
--serve-path
The pathname where the app will be served.
--serve-path-default-warning
Show a warning when deploy-url/base-href use unsupported serve path values.
--source-map
Output source maps for scripts and styles. For more information, see https://angular.io/guide/workspace-config#source-map-configuration.
--ssl
Serve using HTTPS.
--ssl-cert
SSL certificate to use for serving HTTPS.
--ssl-key
SSL key to use for serving HTTPS.
--vendor-chunk
Generate a seperate bundle containing only vendor libraries. This option should only used for development.
--verbose
Adds more details to output logging.
--watch
Rebuild on change.Generates and/or modifies files based on a schematic.
usage: ng generate <schematic> [options]

arguments:
schematic
The schematic or collection:schematic to generate.

options:
--defaults
Disable interactive input prompts for options with a default.
--dry-run (-d)
Run through and reports activity without writing out results.
--force (-f)
Force overwriting of existing files.
--help
Shows a help message for this command in the console.
--interactive
Enable interactive input prompts.

Available Schematics:
Collection "@schematics/angular" (default):
app-shell
application
class
component
directive
enum
guard
interceptor
interface
library
module
pipe
resolver
service
service-worker
web-worker
