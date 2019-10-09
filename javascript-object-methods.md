# Working With Data

## Consolidating An Array of Objects to a single object, with only specified properties:

```javascript
const views = [
  { id: '1', name: 'title', type: 'text', value: '' },
  { id: '2', name: 'text', type: 'text', value: '' },
  { id: '3', name: 'rate', type: 'number', value: '' },
  { id: '4', name: 'delay', type: 'number', value: '' },
  { id: '5', name: 'emoji', type: 'text', value: '' }
];
```

{% hint style="info" %}
 We'll need to use two different methods to first, return an array of objects, excluding any properties we don't specify.
{% endhint %}

First use [array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to map thru the array and return a new array of objects

```javascript
  const allObjects = views.map(({ name, value }) => ({ 
    [name]: value 
  }));
```

{% hint style="info" %}
Next we can take the results from the new array of objects, which currently looks like this: 
{% endhint %}

```javascript
// console.log(objects)

[
  { title: '' },
  { text: '' },
  { rate: '' },
  { delay: '' },
  { emoji: '' }
]
```

{% hint style="info" %}
And we can now create a new object using the Object.assign\(\) method, along with the \(es6\) spread operator:
{% endhint %}

```javascript
const finalObject = Object.assign({}, ...objects)

console.log(finalObject)
```

{% hint style="info" %}
Which now gives us the final object with our specified properties and values:
{% endhint %}

```javascript
{ title: '', text: '', rate: '', delay: '', emoji: '' }
```

{% hint style="info" %}
Finally, we can abstract this functionality away into a function that does this for us.
{% endhint %}

```javascript
const newObject = (arrOfObjs) =>  {
  let newArrOfObjs = arrOfObjs.map(({name, value}) => ({
    [name]: value
  }))
  return Object.assign({}, ...newArrOfObjs)
}

console.log(newObject(views)) 

// => { title: '', text: '', rate: '', delay: '', emoji: '' }
```

```javascript
function newObject (arrOfObjs) {
  let newArrOfObjs = arrOfObjs.map(({name, value}) => ({
    [name]: value
  }))
  return Object.assign({}, ...newArrOfObjs)
}

console.log(newObject(views)) 

// => { title: '', text: '', rate: '', delay: '', emoji: '' }
```

