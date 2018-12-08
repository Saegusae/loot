# loot

New and revamped auto looting utility for tera.

## Usage:

Just install the module like you normally would and configure it using the `config.json` file. Whitelist takes priority over everything, if any item is defined in the whitelist array any other item won't be looted. Meanwhile blacklist just means "don't loot items in this list please". Which can include heal/mana/keen motes, and lootboxes, or whatever you want.

## Requires:

Command, and Vec3 Modules: They are both included in any recent version of proxy.

## Commands:

| Base | Arguments | Description                                                                       |
| ---- | --------- | --------------------------------------------------------------------------------- |
| loot |           | Enable or Disable the module.                                                     |
| loot | overworld | Enable or Disable auto looting in the overworld                                   |
| loot | instance  | Enable or Disable auto looting in instances                                       |
| loot | templates | Prints a list of your custom templates defined in config, to chat                 |
| loot | save      | Saves current configuration to your config.json file                              |
| loot | load      | Loads new configuration from config.json file (for defining templates in runtime) |
| loot | set/use   | Sets a template to be used by the auto loot module                                |

## Configuration

Loot's configuration file now allows customization never before seen! You can enable/disable looting for instances or overworld seperately, as well as setting loot range (max 200~) and loot search interval. Now you can define custom templates of white/black lists. If a whitelist is defined in the selected template, the blacklist will be completely ignored and only item ID's included in the whitelist will be looted automatically. If a whitelist is not defined or empty, only items existing in the blacklist will not be looted. If neither are defined any and all item drops will be automatically looted.

## Building from TypeScript source:

If you are interested in recompiling the module, all the source files and the `gulp` script is included in the `src` branch. Just run `gulp` after running `npm install` to get the dependencies installed. It will dump the compiled and generated files into the `build` folder in it's root directory.
