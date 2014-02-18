# inline-edit. A Ractivejs component

Draft v0.0.0. not for public consumption, yet.

Dispenses with plethora of stuff you dont need and leaves an nicer, easier user experience. Whats not to like? Instead of having a modal, form, save and cancel buttons just drop in this component.

instructions:

This version designed to use with requirejs.
so first add a path to your requirejs config:

    require.config = {
        'InlineEditComponent': 'components/inline-edit/inline-edit',
    }


Add component to Ractive parent view/component:

    var InlineEditComponent = require('InlineEditComponent');
	var inlineEditComponent = Ractive.extend(InlineEditComponent);
    var ractive = new Ractive({
        components: { 
		    inlineEdit: inlineEditComponent
		}
    });

Add components to markup:

    <!--
    <inlineEdit field="{{doc.name}}" placeHolder="name" </inlineEdit>
-->

Field attribute is required, set to the parents two-way bound data. This is the components entire api. It passes through inputting and outputting the bound field. this maps your data into the component. when it is inactive the component becomes a span,
when active a textarea.

This is such a simple component it's probably not worth extending it. Better to take this as an example and roll your own tailored to use case.



##todo

 - build to dist with bundled template into component.
 - example
 - ci
 - change proxy click to tap for touch devices.
 - take out inline styles.
 - allow partial template override.

> Written with [StackEdit](https://stackedit.io/).
