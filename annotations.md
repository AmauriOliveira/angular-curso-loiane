# Manual

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

> Error: More than one module matches. Use the skip-import option to skip importing the component into the closest module or use the module option to specify a module.

use

```bash
ng g c new-component --module app
```

or

```bash
ng g c component-name --module ../
```
