
# n8n-nodes-nexl

## Prerequisites

You need the following installed on your development machine:

* [git](https://git-scm.com/downloads)
* Node.js and pnpm. Minimum version Node 18. You can find instructions on how to install both using nvm (Node Version Manager) for Linux, Mac, and WSL [here](https://github.com/nvm-sh/nvm). For Windows users, refer to Microsoft's guide to [Install NodeJS on Windows](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).
* Install n8n with:
  ```
  pnpm install n8n -g
  ```
* Recommended: follow n8n's guide to [set up your development environment](https://docs.n8n.io/integrations/creating-nodes/build/node-development-environment/).

## Using this starter

These are the basic steps for working with the starter. For detailed guidance on creating and publishing nodes, refer to the [documentation](https://docs.n8n.io/integrations/creating-nodes/).

1. Clone your repo:
   ```
   git clone https://github.com/ivanlarikov/n8n-nexl.git
   ```
2. Run `pnpm i` to install dependencies.
3. Run `pnpm lint` to check for errors or `pnpm lintfix` to automatically fix errors when possible.
4. Run `cd C:/Users/<User Name>/.n8n` or `cd ~/.n8n`
5. Run `mkdir custom`, `cd custom` and `npm init`
9. Run `pnpm link /path/to/n8n-nodes-nexl`
10. Run `npm run build` inside project and `n8n start`
10. If you run `npm run dev` inside the project, it will watch the changes and trigger compiling.
11. Don't forget to restart n8n to see the changes.


## More information

Refer to [documentation on creating nodes](https://docs.n8n.io/integrations/creating-nodes/) for detailed information on building your own nodes.

## License

[MIT](https://github.com/n8n-io/n8n-nodes-starter/blob/master/LICENSE.md)
