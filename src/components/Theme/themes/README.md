# Themes Specification

All themes must conform all properties defined below; when adding new properties, they must be added to all themes defined under this directory.

property                                | Description
--------------------|------------
Primary                                 | The primary hex color used to represent branded content
Secondary                             | A hex color that complements the primary color
Accent                                   | A hex color used to draw attention to user interface elements
AppBackground                    | The background definition used as the CSS background for the app and pages
AppBackgroundColor           | A hex color to use in place of the AppBackground
AppText                                 | The hex color of text that appears on the AppBackground
AppBorder                             | The hex color of the borders on the app background
AppBorderSecondary            | The secondary (usually lighter) color of the borders on the app background
AppTextSecondary                | A hex color used for subheadings and subtitles appearing on the AppBackground or AppBackgroundColor 

(For outlines and fill, if they are both in rgba, you can set one opacity to 0 to be transparent)
(Can also do linear gradients)
BixOutlineStageOne              | A hex color used for the stage one background color of the Bix button in the navbar
BixOutlineStageTwo              | A hex color used for the stage two background color of the Bix button in the navbar
BixOutlineStageThree            | A hex color used for the stage three background color of the Bix button in the navbar
BixFillStageOne                     | A hex color used for the stage one fill color of the Bix button in the navbar
BixFillStageTwo                     | A hex color used for the stage two fill color of the Bix button in the navbar
BixFillStageThree                   | A hex color used for the stage three fill color of the Bix button in the navbar

CardBackground                     | The background definition used as the CSS background for modals, elements and containers
CardBackgroundColor            | A hex color to use in place of CardBackground
CardBackgroundSecondary        | An RGBA code to use as a secondary background on cards
CardText                                  | The hex color of text that appears on the AppBackground
CardTextSecondary                 | A hex color used for subheadings and subtitles appearing on the CardBackground or 
CardBorder                             | The hex color of the borders on the card background
CardBorderSecondary            | The secondary (usually lighter) color of the borders on the card backgroundCardBackgroundColor
NavLogo                                 | A hex color used to color the logo in the desktop navigation bar.
NavBackgroundStageOne       | A hex color used as the background color for the first stage.
NavBackgroundStageTwo      | A hex color used as the background color for the second stage.
NavBackgroundStageThree    | A hex color used as the background color for the third stage.
NavColor                                 | A hex color used to represend the navigation background
NavActive                               | A hex color used for the active navigation icon
NavInactive                             | A hex color used for the inactive navigation icons
NavIconStageTwo                   | A hex color that will color the mobile icons on the second stage
NotificationColor                     | Hex color used for notification background
NotificationText                       | Hex color used for notification text
ErrorColor                                | Hex color used for error background
ErrorText                                  | Hex color used for error text
SuccessColor                            | Hex color used for success background
SuccessText                              | Hex color used for success text
PricePositive                            | Hex color used to indicate positive price changes
PriceNegative                          | Hex color used to indicate negative price changes