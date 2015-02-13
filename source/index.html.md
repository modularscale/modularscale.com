## How do I use this?

Use a scale like you would use a ruler. Many people set heading type sizes with numbers from a scale, but that's just one possibility. You can use a scale to measure or set the size of any element or negative space in a composition — including grids, and the overall dimensions of the composition itself.

- Introduced at [Build 2010](http://vimeo.com/17079380) (video, Tim Brown)
- Read [More Meaningful Typography](http://www.alistapart.com/articles/more-meaningful-typography/) (Tim Brown)

## What’s a good base?

Body text type size is a good place to start. If you want to get more nerdy, dig into the font metrics of your typeface (x-height, for example) and use that data as a base. If your layout has important fixed-width images or ads, you could use those widths.

## What’s a good ratio?

Ratios can be chosen carefully and meaningfully, drawing inspiration from the history and character of a typeface or other elements in a project. Billy Whited gave [several tips for choosing a scale](http://blog.8thlight.com/billy-whited/2011/10/28/r-a-ela-tional-design.html#tips), and Nathan Ford wrote about choosing ratios as part of [deriving layout from your typeface](http://blog.typekit.com/2014/02/26/deriving-layout-from-your-typeface/). Owen Gregory thinks we might look to [musical scales for better harmony](http://24ways.org/2011/composing-the-new-canon). Or, choosing a ratio can be more simple — especially with help from plugins. If the scale-based sizes in your project's CSS are essentially variables, you can try different ratios to see how they look.

## Can I use more than one ratio?

Sure! One base with one ratio is a modular scale. Any more than that is a _multi-stranded_ modular scale. (Try entering a second base or ratio, and you'll see the a/b labeling in this calculator's output pane.) Multi-stranded modular scales are powerful because they add more numbers to your scale, and that flexibility means it's more likely that a number from your scale will work in your project. But too many strands can dilute a scale.

## Why can't I use multiple bases _and_ ratios?

Because that would _really_ dilute the scale. If multiple ratios share the same base, they are united by that base. Even if two numbers in the scale's output are from different strands, they began at the same place. Similarly, if multiple bases share the same ratio, that's what ties the scale together. But if there are two bases _and_ two ratios, it's possible that numbers from the scale's output could be completely unrelated to one another.

## Should I use the Sass / JS plugins?

They are amazing, but they do require setup. This web calculator is a good way to reference scales and visually create them, but having a modular scale calculator _right in your project_ allows you to change your scales on the fly. It also saves you the effort of having to remember values.

Both plugins work the same way:

1. First, you need to install them in your project. There are several installation options. Head over to the pages to find out more: [Sass](https://github.com/modularscale/modularscale-sass) and [JavaScript](https://github.com/modularscale/modularscale-js)
2. Next, calculate a scale here at modularscale.com
3. Finally, near the bottom of the calculator, use the Sass or JS tab to copy configuration code into your project

When you have things all set up, use the function `ms(0)` in your Sass or JS. Change the number in the function, and you get different values from your scale. You can also refer back to function values in the output pane here at modularscale.com — when you are using the plugins, you can just drop these functions into your project to get the associated value.

## About this website

First introduced at [Build 2010](http://vimeo.com/17079380) by Tim Brown, this site was built as a tool to help web designers size their type in a more meaningful way. The site re-launched at [AEA Atlanta 2015](http://aneventapart.com/event/atlanta-2015) through a collaboration between Tim Brown and Scott Kellum. The re-launch was an effort to consolidate, improve, and promote tools and best practices around using modular scales.

This site is designed using JAF Bernino by [Just Another Foundry](http://justanotherfoundry.com/) and Freight Text by [Darden Studio](http://dardenstudio.com/) served through [Typekit](https://typekit.com/). It is built on [Middleman](https://middlemanapp.com/), [Sass](http://sass-lang.com/), and [Compass](http://compass-style.org/) using the modular scale plugins and [color-schemer](https://github.com/at-import/color-schemer). You can view the [full source on Github](https://github.com/modularscale/modularscale). Hosted on [BitBalloon](https://www.bitballoon.com/).