# Micro-Frontend Extensions
Just-in-time renderer for dynamic Angular components bundled with [Module Federation](https://webpack.js.org/concepts/module-federation/).

## Prerequisites

The package requires the following peer dependencies:

```json
{
  "@angular/common": "^12.0.0",
  "@angular/core": "^12.0.0",
  "@angular-architects/module-federation": "^14.1.0"
}
```

## Usage

Initialize your dynamic configuration:

```ts
const config: RemoteOutletConfig = {
  remoteEntry: "https://cdn.yourhost.com/remoteEntry.js",
  remoteName: "example_remote",
  module: "ExampleModule",
  component: "ExampleComponent",
  placeholder: {
    minHeight: 220
  }
}
```

Where
* `remoteEntry`: URL to the main bundle from your Micro-Frontend
* `remoteName`: name you've set as `output.uniqueName` in your Webpack Config
* `module`: name of the NgModule that declares the providers and imports of your component
* `component`: name of the Component you want to render
* `placeholder`: dimensions of the placeholder-container shown during loading

Then, add this component to the Angular-Template where you want to render your dynamic Micro-Frontends:

`<remote-outlet [config]="config"></remote-outlet>`
