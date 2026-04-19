---
title: React Learnings
pubDate: '0000-00-00 00:00:00'
updatedDate: '2017-11-19 21:45:53'
description: 'Stolen from a stackoverflow response: Since value is always rendered
  with the same value ( shop_profile_data.NAME ) nothing is able to change. By setting
  value'
draft: true
slug: react-learnings
author: jonathanmeaney
---
Stolen from a stackoverflow response:
> Since `value` is always rendered with the same value (`shop_profile_data.NAME`) nothing is able to change. By setting `value` property you are making `input` a Controlled Component.
> You need to add an `onChange` event and then set the `shop_profile_data.NAME` to a different value. Then the value of the `input` will change.
> If you only want to set the initial value of the `input`, use `defaultValue` property ([docs](https://facebook.github.io/react/docs/forms.html#default-value)).`defaultValue` will set the initial value, but then allow the value to be changed.
> For more read about [Controlled vs Uncontrolled Components](https://facebook.github.io/react/docs/forms.html).
