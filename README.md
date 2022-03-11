# PWAs and using a Keyboard on Mobile devices

## The problems

Using the native on screen keyboard has a couple of problems:

1. It only gets triggered when the **user** presses a *text input field*.
2. using the keyboard doesn't seem to trigger keydown events.

It does **NOT** get triggered when we focus the text input programmatically.

This means that the following approaches **are NOT a solution**:

- creating a ref to the text input and setting the focus in a useEffect

- adding an onClick to another element to set the focus to the inputRef

Since the user has to press the input field, it is not possible to hide it via css.

Even if the user presses a text input and types letters on the keyboard, keydown events are not triggered.

## The solution

Use your own keyboard component. You can show or hide it as you wish.

Keep in mind that it takes space, so you might want to use media queries.

You could also force a portrait view by setting the "display" and "orientation" in your manifest as follows:

```json
"display": "fullscreen",
"orientation": "portrait",
```

This can lead to some white space problems, easily fixed in css:

```css
html,body {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
}
```

Note however that these settings in the manifest will only work when the PWA is actually installed and not when the user just runs it in a browser.
