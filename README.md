# react-component-storybook

Use vitejs, storybook and typescript to build great react components.

> Just click `Use this template` button or use `gh` cli `gh repo create -p jeasonstudio/react-component-storybook my-component`. [Read more documents.](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template)

## Install

```
$ yarn
```

## Develop

```
$ yarn dev
```

## Build

```
$ yarn build
```

## Publish

```
$ yarn version --(major|minor|patch|...)
$ yarn publish
```

## CI/CD

We use vercel to deploy our component stories.

* [find vercel token](https://vercel.com/account/tokens) and set to actions secret `VERCEL_TOKEN`
* [get projectId and orgId](https://vercel.com/docs/build-step#system-environment-variables) and set to actions secret `VERCEL_ORG_ID/VERCEL_PROJECT_ID`

## License

Available under the [MIT license](LICENSE).
