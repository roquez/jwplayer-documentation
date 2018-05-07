# Video Player Bidding Advanced Guide

!!!
Ensure all ad blockers are disabled before proceeding.
!!!

## Configuration Requirements

A `bids` block must be present within the `advertising` block. The `bids` block should point to an object, with the following _required_ options:

* `settings` (type: _object_)
    * `mediationLayerAdSever` (type: _string_)
        * `"jwp"`
        * `"jwpspotx"`
        * `"dfp"`
        * `"jwpdfp"`
    * `floorPriceCents` (type: _integer_)
        * Note: Currence defaults to USD, but is configurable through `floorPriceCurrency`.
* `bidders` (type: _array_)
    * An array of objects containing the names and IDs for each bidder.


!!!
`mediationLayerAdServer` and bidder name settings are case sensitive.
!!!


#### Example Configuration

```
{
  "file": "https://content.jwplatform.com/videos/1g8jjku3-cIp6U8lV.mp4",
  "image": "http://d3el35u4qe4frz.cloudfront.net/bkaovAYt-480.jpg",
  "advertising": {
    "client": "googima",
    "schedule": {
      "adBreak": {
        "tag": "//pubads.g.doubleclick.net/gampad/ads?sz=640x480...",
        "offset": "pre"
      }
    },
    "bids": {
      "settings": {
        "mediationLayerAdServer": "dfp",
          "floorPriceCents": 2,
          "floorPriceCurrency": "usd",
          "bidTimeout": 1000
        },
        "bidders": [
          {
            "name": "SpotX",
            "id": "85394"
          }
        ]
    }
  }
}
```

### Custom Parameters

If you require additional custom parameters to be appended to the ad tag prior to it being requested, you can include these in a custom block within an `optionalParams` block that is contained within a bidder object.

#### Example Configuration

```
{
  "file": "https://content.jwplatform.com/videos/1g8jjku3-cIp6U8lV.mp4",
  "image": "http://d3el35u4qe4frz.cloudfront.net/bkaovAYt-480.jpg",
  "advertising": {
    "client": "googima",
    "schedule": {
      "adBreak": {
        "tag": "//pubads.g.doubleclick.net/gampad/ads?sz=640x480...",
        "offset": "pre"
      }
    },
    "bids": {
      "settings": {
        "mediationLayerAdServer": "dfp",
          "floorPriceCents": 2,
          "floorPriceCurrency": "usd",
          "bidTimeout": 1000
      },
      "bidders": [
        {
          "name": "SpotX",
          "id": "85394",
          "optionalParams": {
            "custom": {
              "name": "custom_param_name_goes_here",
              "value": "custom_param_value_goes_here",
            }
          }
        }
      ]
    }
  }
}
```

## Troubleshooting Steps

#### Confirm that the ad plugin is loaded

* For VAST, check the network tab for `"vast.js"` and ensure that the request was successful.
* For IMA, check the network tab for `"imasdk.googleapis"`. If the ad plugin is not loaded, first ensure that you do not have an ad blocker enabled. If you do not, please contact [our Support Team](https://support.jwplayer.com).


#### Confirm that the bidder script has loaded

* In the network tab, filter for `"jw.spotx.tv/directsdk"` or `"search.spotx"`.
* If the script is not loaded please ensure that your configuration is correct according to the provided examples. If it is, please contact the [our Support Team](https://support.jwplayer.com) or SpotX.


#### Ensure parameters are being passed correctly in the ad request

_DFP_

1. Open up the Developer Tools and navigate to the Network tab.
2. Search/filter for the ad request. You can filter on any portion of the provided tag.
3. Inspect the full request URL. After `cust_params=`, you should see `spotx_bid` and `spotx_ad_key`.

![Parameters - DFP](../img/vpb/vpb1_dfp_ad_request.png)

_JWP_

1. Open up the Developer Tools and navigate to the Network tab.
2. Search/filter for the request being sent to SpotX. You can filter on `spotxchange.com`. If you do not see the parameters or the ad request, please contact [our Support Team](https://support.jwplayer.com).

![Parameters - JWP](../img/vpb/vpb2_jwp_ad_request.png)


#### Confirm that the bid request occurred and the parameters are passed through correctly

* In the Network tab, filter for `search.spotx`.
* One of the requests should contain a Request Payload, like the one below.
* If the request is not going out correctly, please contact [our Support Team](https://support.jwplayer.com).

![Request Payload](../img/vpb/vpb3_req_payload.png)


#### Confirm that the bid response occurred

* In the Network tab, filter on `abr` for a request sent to `dev.jwpltx`. This request is a ping to our Analytics service. If there are no requests matching this description, then the event likely did not happen.
* If you do not see the ping, please contact [our Support Team](https://support.jwplayer.com).
* If the ping is present, and an issue is still occurring, please reach out to SpotX.


#### Confirm that a timeout is not causing the issue

Within the `settings` block, explicitly set the `bidTimeout` property to `10000` (10 seconds). The default is 1,000 ms.

|Issue Description|Recommended Support Channel|
|---|---|
|Player is not loading|JW Player|
|Ad plugin is not loading|JW Player|
|Bidder script is not loading|JW Player/SpotX|
|No bid response|JW Player/SpotX|
|Bid request does not include all parameters|JW Player|


## Configuring Video Player Bidding to Work with an Existing Header Bidding Solution

If you already have a home-grown header bidding solution, converting to using the JW Player Video Player Bidding solution is a simple process that most likely follows a similar workflow to your existing process.

In our experience, most custom solutions utilize the following workflow:


1. The webpage is requested
2. Each header bidding partner’s script is requested, often from the `<head>` of the page
3. API calls are dispatched to fetch bids from each header bidding partner
4. Each partner returns their custom parameters
5. The custom parameters are appended to the DFP tag to be supplied to the player
6. JW Player is instantiated using the modified DFP tag
7. The IMA SDK loads
8. The player looks at the ad schedule then makes the request to DFP using the modified tag.


When using the SpotX Video Player integration, the workflow is largely the same, but a few additional steps are handled by JW Player. Specifically, the following occurs between items #7 and #8 above:


1. The player loads the SpotX bidding script
2. The player will make a bid request to SpotX
3. The player receives the bid response and the custom parameters
4. JW Player appends the custom parameters to the DFP tag

!!!
The JW Player Video Player Bidding solution requires line items for each bidder to be created in DFP.<br/><br/>Given how many network requests will be going out for the bidders, click-to-play or auto starting when the player is viewable (with the player below the fold) is likely to be a more successful strategy than setting `autostart: true`.
!!!