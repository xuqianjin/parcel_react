export const getByProperityChain = (source, chains, defaults) => {
  if (typeof source !== 'Object') {
    return defaults;
  }
  if (!Array.isArray(chains)) {
    throw new Error('second param must be array');
  }
  let _source = source;
  for (let chain of chains) {
    if (typeof _source[chain] !== 'undefined') {
      _source = _source[chain];
    } else {
      return defaults;
    }
  }
  return _source;
}
export const isLogin = () => {
  let user = localStorage.getItem('user');
  if (user && JSON.parse(user) && JSON.parse(user).token && new Date(JSON.parse(user).expired) > new Date())
    return true;
  return false;
}

export const getAuthorization = (reducer) => {
  let _value = undefined;
  if (reducer) _value = getByProperityChain(reducer, ['user', 'token'], undefined);
  if (JSON.parse(localStorage.getItem('user'))) {
    if (!_value) _value = JSON.parse(localStorage.getItem('user')).token;
  }
  if (!_value) return _value;
  return 'Bearer ' + _value;
}


export const parseObjects = (objs) => {
  let tidyObject = (obj) => {
    let _obj = {};
    let keys = Object.keys(obj);

    keys.forEach((key) => {
      if (!/^__/.test(key)) {
        _obj[key] = obj[key];
      }
    });
    return _obj;
  }

  let [createdIndex, created, updateds] = [-1, null, []];
  for (let i = 0, len = objs.length; i < len; i++) {
    let obj = objs[i];
    if (obj.__new) {
      createdIndex = i;
      created = tidyObject(obj);
    }
    if (obj.__dirty) {
      updateds.push(tidyObject(obj));
    }
  }
  return [createdIndex, created, updateds];
}

export const mapCollectionToTypes = collection => collection.map(item => ({
  id: item.id,
  title: item.name,
  value: item.id
}));

export const findById = (arr, id) => arr.filter(item => item.id === id);

export const shadowDiffer = (first, second, result) => {
    let i = 0;
    for (i in first) {
      if (typeof first[i] === "object" && typeof second[i] === "object") {
        result[i] = differ(first[i], second[i], {});
        if (!result[i]) delete result[i];
      } else if (first[i] != second[i]) {
        result[i] = second[i];
      }
    }
    return isEmpty(result) ? undefined : result;
  }

export const copyObject = (object) => {
  let data = {}
  if (object) {
    for (var variable in object) {
      data[variable] = object[variable]
    }
  }
  return data
}

export const DX = (n) =>{
  if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n))
    return "数据非法";
  var unit = "千百拾亿千百拾万千百拾元角分",
    str = "";
  n += "00";
  var p = n.indexOf('.');
  if (p >= 0)
    n = n.substring(0, p) + n.substr(p + 1, 2);
  unit = unit.substr(unit.length - n.length);
  for (var i = 0; i < n.length; i++)
    str += '零壹贰叁肆伍陆柒捌玖'.charAt(n.charAt(i)) + unit.charAt(i);
  return str.replace(/零(千|百|拾|角)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万|壹(拾)/g, "$1$2").replace(/^元零?|零分/g, "").replace(/元$/g, "元整");
}
