# ColorDay Website
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![Test-Master](https://img.shields.io/azure-devops/tests/brycenycuu/colorDay/5/master?label=test-prod)](https://dev.azure.com/brycenycuu/colorDay/_build?definitionId=5&_a=summary)
[![Release-Master](https://img.shields.io/azure-devops/release/brycenycuu/59c751dd-bc15-46cb-9341-20abcd916e36/3/3?label=release-prod)](https://dev.azure.com/brycenycuu/colorDay/_release?view=all&_a=releases&definitionId=3)
[![Test-Dev](https://img.shields.io/azure-devops/tests/brycenycuu/colorDay/7/master?label=test-beta)](https://dev.azure.com/brycenycuu/colorDay/_build?definitionId=7&_a=summary)
[![Release-Dev](https://img.shields.io/azure-devops/release/brycenycuu/59c751dd-bc15-46cb-9341-20abcd916e36/5/5?label=release-beta)](https://dev.azure.com/brycenycuu/colorDay/_release?view=all&_a=releases&definitionId=5)
[![Issues](https://img.shields.io/github/issues/brycenycuu/colorday-website)](https://github.com/brycenycuu/colorday-website/issues)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat)](#contributors-)
[![License](https://img.shields.io/github/license/brycenycuu/colorday-website)]()
<!-- ALL-CONTRIBUTORS-BADGE:END -->

ColorDay is an ongoing full stack application based on personal interests. This repository is the frontend of the application built with Angular.

The [backend of ColorDay](https://github.com/colorday-app/colorday-service) is built with Spring Boot.

## Development

Verity the installation of `node` and `npm` with `which node` and `which npm` on your local desktop. If not present, run `brew install node` and `brew install npm` to install them.

Clone the repository to your local desktop and run `npm install` to download all dependencies. 

Run `npm start` to start the development server, and navigate to `http://localhost:4200/` in you browser. The app will automatically reload if there is any change on source files.

This repository uses [Azure Pipelines](https://dev.azure.com/brycenycuu/colorDay/_build) for CI/CD. Changes on `master` branch are built and automatically deployed to [Prod Website](https://colordayweb.azurewebsites.net), and changes on `dev` branch are built and automatically deployed to [Beta Website](https://colordaywebbeta.azurewebsites.net). Developers should always create PR to `dev` branch when contribute.

## Contribution

There are many ways to contribute to this project. You may provide suggestions, request features, report issues, or even submit pull requests. Contributions of any kind welcome!

### Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://diwu.tech"><img src="https://avatars2.githubusercontent.com/u/28286130?v=4" width="100px;" alt=""/><br /><sub><b>Di Wu</b></sub></a><br /><a href="https://github.com/brycenycuu/colorday-website/commits?author=brycenycuu" title="Code">💻</a> <a href="https://github.com/brycenycuu/colorday-website/commits?author=brycenycuu" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification.
