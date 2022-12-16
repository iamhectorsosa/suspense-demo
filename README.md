# Suspense

Suspense isn't a new on the React ecosystem. A limited version of Suspense was introduced several years ago to support code splitting on the client with `React.lazy` (lets you defer loading component’s code until it is rendered for the first time), and it wasn't supported at all when rendering on the server.

In React 18, now Suspense has support for server-rendering and concurrent features (such as automatic batching and urgent/non-urgent transitions). There aren't changes to the Suspense API itself, but changes in the expected behaviours and features that relate to it. This set of changes is the first step towards making Suspense more powerful for the React Ecosystem.

React 18 lets you use `<Suspense>` to **break down your app into smaller independent units** which will go through these steps independently from each other and won’t block the rest of the app. As a result, your app’s users will see the content sooner and be able to start interacting with it much faster. The slowest part of your app won’t drag down the parts that are fast. These improvements are automatic, and you don’t need to write any special coordination code for them to work.

Feel free to explore this example using the resources below:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/ekqt/suspense-demo?file=app/page.tsx&title=Suspense)
