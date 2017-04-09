# @mm2/g-scrollTo

## Demo
https://MarcinMichalik.github.io/ng-scrollTo/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

Simple scrollTo directive for Angular 2+. You can use it to scroll to element on your website. 

## Installation

Install through npm:
```
npm install --save @mm2/ng-scrollTo
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { ScrollToModule } from '@mm2/ng-scrollTo';

@NgModule({
  imports: [
    ScrollToModule.forRoot()
  ]
})
export class MyModule {}
```

## Usage

scrollDuration and scrollOffset is optional parameters.

### Directive

```html
<button class="btn btn-primary" [scrollTo]="'#place1'" [scrollDuration]="1000" [scrollOffset]="-100">Place 1</button>
<button class="btn btn-primary" [scrollTo]="place2">Place 2</button>
<div id="place1"></div>
<div #place2></div>
```

You may also find it useful to view the [demo source](https://github.com/MarcinMichalik/ng-scrollTo/blob/master/demo/demo.component.html).

### Service

```html
<div class="card mt-5" #top></div>
<button class="btn btn-primary" (click)="scrollToTop(top)">Top</button>
```

You may also find it useful to view the [demo source](https://github.com/MarcinMichalik/ng-scrollTo/blob/master/demo/demo.component.html).

```typescript
import { ScrollToService } from '@mm2/ng-scrollTo';

export class DemoComponent {

    constructor(private scrollService: ScrollToService) {}

    scrollToTop(element) {
        this.scrollService.scrollTo(element);
    }
}
```

You may also find it useful to view the [demo source](https://github.com/MarcinMichalik/ng-scrollTo/blob/master/demo/demo.component.ts).


## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://MarcinMichalik.github.io/ng-scrollTo/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT