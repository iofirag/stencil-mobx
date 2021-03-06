/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */
declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


import {
  App as MyApp
} from './components/app/app';

declare global {
  interface HTMLMyAppElement extends MyApp, HTMLStencilElement {
  }
  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };
  interface HTMLElementTagNameMap {
    'my-app': HTMLMyAppElement;
  }
  interface ElementTagNameMap {
    'my-app': HTMLMyAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-app': JSXElements.MyAppAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAppAttributes extends HTMLAttributes {
      
      
    }
  }
}


import {
  MyAddress as MyAddress
} from './components/my-address/my-address';

declare global {
  interface HTMLMyAddressElement extends MyAddress, HTMLStencilElement {
  }
  var HTMLMyAddressElement: {
    prototype: HTMLMyAddressElement;
    new (): HTMLMyAddressElement;
  };
  interface HTMLElementTagNameMap {
    'my-address': HTMLMyAddressElement;
  }
  interface ElementTagNameMap {
    'my-address': HTMLMyAddressElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-address': JSXElements.MyAddressAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAddressAttributes extends HTMLAttributes {
      'city'?: string;
      'state'?: string;
      'street'?: string;
      
    }
  }
}


import {
  HeaderComponent as MyHeader
} from './components/my-header';

declare global {
  interface HTMLMyHeaderElement extends MyHeader, HTMLStencilElement {
  }
  var HTMLMyHeaderElement: {
    prototype: HTMLMyHeaderElement;
    new (): HTMLMyHeaderElement;
  };
  interface HTMLElementTagNameMap {
    'my-header': HTMLMyHeaderElement;
  }
  interface ElementTagNameMap {
    'my-header': HTMLMyHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-header': JSXElements.MyHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface MyHeaderAttributes extends HTMLAttributes {
      
      
    }
  }
}


import {
  MyName as MyName
} from './components/my-name/my-name';

declare global {
  interface HTMLMyNameElement extends MyName, HTMLStencilElement {
  }
  var HTMLMyNameElement: {
    prototype: HTMLMyNameElement;
    new (): HTMLMyNameElement;
  };
  interface HTMLElementTagNameMap {
    'my-name': HTMLMyNameElement;
  }
  interface ElementTagNameMap {
    'my-name': HTMLMyNameElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-name': JSXElements.MyNameAttributes;
    }
  }
  namespace JSXElements {
    export interface MyNameAttributes extends HTMLAttributes {
      'first'?: string;
      'last'?: string;
      
    }
  }
}


import {
  MyRoutes as MyRoutes
} from './components/my-routes';

declare global {
  interface HTMLMyRoutesElement extends MyRoutes, HTMLStencilElement {
  }
  var HTMLMyRoutesElement: {
    prototype: HTMLMyRoutesElement;
    new (): HTMLMyRoutesElement;
  };
  interface HTMLElementTagNameMap {
    'my-routes': HTMLMyRoutesElement;
  }
  interface ElementTagNameMap {
    'my-routes': HTMLMyRoutesElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-routes': JSXElements.MyRoutesAttributes;
    }
  }
  namespace JSXElements {
    export interface MyRoutesAttributes extends HTMLAttributes {
      
      
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
