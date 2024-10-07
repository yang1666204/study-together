Promise.all = function (promises) {
  const result = new Array(promises.length);
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((p, idx) => {
      Promise.resolve(p)
        .then((value) => {
          result[idx] = value; // idx可以保证返回的结果是有序的
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

Promise.allSettled = function (promises) {
  const result = new Array(promises.length);
  let count = 0;
  return new Promise((resolve) => {
    promises.forEach((p, idx) => {
      Promise.resolve(p)
        .then((value) => {
          result[idx] = { status: "fulfilled", value };
        })
        .catch((err) => {
          result[idx] = { status: "rejected", reason: err };
        })
        .finally(() => {
          if (++count === promises.length) {
            resolve(result);
          }
        });
    });
  });
};

Promise.race = function (promises) {
  let flag = false;
  return new Promise((resolve, reject) => {
    promises.forEach((p, idx) => {
      Promise.resolve(p)
        .then((value) => {
          if (!flag) {
            resolve(value);
          }
        })
        .catch((err) => {
          if (!flag) {
            reject(err);
          }
        })
        .finally(() => {
          flag = true;
        });
    });
  });
};

Promise.any = function (promises) {
  const result = {
    errors: new Array(promises.length),
  };
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((p,idx) => {
      Promise.resolve(p)
        .then((value) => {
          resolve(value);
        })
        .catch((err) => {
          result.errors[idx] = err;
        })
        .finally(() => {
          count++;
          if (count === promises.length) {
            reject(result);
          }
        });
    });
  });
};
