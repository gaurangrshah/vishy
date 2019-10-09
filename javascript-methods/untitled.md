---
description: How things are handled in react.
---

# React Methods

## React Hooks: useState\(\):: Update Object State Value

```
  const [values, setValues] = useState(initialState);
  const updateValue = e => {
    let [name, value] = e.target;
    console.log(setValues({ ...values, [name]: value }));
  };
```

{% hint style="info" %}
 Super-powers are granted randomly so please submit an issue if you're not happy with yours.
{% endhint %}

Once you're strong enough, save the world:

```
// Ain't no code for that yet, sorry
echo 'You got to trust me on this, I saved the world'
```



