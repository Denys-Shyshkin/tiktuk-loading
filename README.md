# Skeleton loading component

This package is a part of Homework for [Genesis](https://gen.tech) Front-End School.
It includes a set of two configurable skeleton components.

![Feb-08-2022 12-33-37](https://user-images.githubusercontent.com/74503981/152970295-c358130e-27c3-4aa7-94ce-d2c24f0b18ea.gif)


## Important note

This npm package is created for homework project app ([tiktuk](https://github.com/Denys-Shyshkin/HomeWork)) use only.

## Installation

Open a Terminal in the project root and run:

```sh
yarn add tiktuk-skeleton-loading
```

Or if you use npm:

```sh
npm install tiktuk-skeleton-loading
```

## Usage

```javascript
import React from 'react';
import { SkeletonFeedList } from 'tiktuk-skeleton-loading';

import PostsList from '../components/FeedPostsList';
import ErrorAlert from '../components/ErrorAlert';
import { useFetch } from '../api/useFetch';

const POSTS_PER_PAGE = 9;
const MEDIA_QUERY = '(max-width:800px)';
const VIDEO_HEIGHT = 350;

const Page = () => {
  const { data, isLoading, isError } = useFetch();

  if (isLoading) {
    return (
      <SkeletonFeedList
        postsPerPage={POSTS_PER_PAGE}
        mediaQuery={MEDIA_QUERY}
        videoHeight={VIDEO_HEIGHT}
      />
    );
  }

  if (isError) {
    return <ErrorAlert/>;
  }

  return <PostsList allPosts={data} />;
};

export default Page;
```

## Props

| name                      | required | default           | type        |
| ------------------------- | -------- | ------------------| ------------|
| postsPerPage              | yes      |                   | number      |
| mediaQuery                | no       |"(max-width:600px)"| string      |
| videoHeight               | no       |    400            | number      |
