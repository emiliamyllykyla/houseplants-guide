import { useEffect, useState } from "react";

// Support both Promises and functions returning a Promise
type PromiseLike<A> = Promise<A> | (() => Promise<A>);

// Turn a PromiseLike into a Promise
const toPromise = <A>(promiseLike: PromiseLike<A>): Promise<A> =>
  "then" in promiseLike ? promiseLike : promiseLike();

export function usePromise<A>(promiseLike: PromiseLike<A>, init: A): A {
  const [data, setData] = useState(init);

  useEffect(() => {
    let canceled = false;

    toPromise(promiseLike).then((value) => {
      if (!canceled) setData(value);
    });

    return () => {
      canceled = true;
    };
  }, [promiseLike]);

  return data;
}
