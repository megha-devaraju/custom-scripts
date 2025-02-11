# Radar Vegetation Index for Sentinel-1 SAR data - RVI4S1 Script

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
{% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize   
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=49.6989&lng=-98.0248&zoom=11&time=2019-06-28&preset=CUSTOM&datasource=Sentinel-1%20AWS%20(S1-AWS-IW-VVVH)&layers=VV,VH,HH&evalscript=Ly8gUmFkYXIgdmVnZXRhdGlvbiBpbmRleCBmb3IgU2VudGluZWwtMSAoUlZJNFMxKSBTQVIgZGF0YQovLyBJbnN0aXR1dGU6IE1SU0xhYiwgSW5kaWFuIEluc3RpdHV0ZSBvZiBUZWNobm9sb2d5IEJvbWJheSwgSW5kaWEKLy8gRGF0YSByZXF1aXJlbWVudHM6IFNlbnRpbmVsLTEgR1JEIGRhdGEKbGV0IGRvcCA9IChWVi8oVlYrVkgpKTsgLy9lcXVpdmFsZW50IHRvIGNvbXBsZW1lbnQgb2YgdGhlIGRlZ3JlZSBvZiBwb2xhcml6YXRpb24KbGV0IG0gPSAxIC0gZG9wOyAgCmxldCB2YWx1ZSA9IChNYXRoLnNxcnQoZG9wKSkqKCg0KihWSCkpLyhWVitWSCkpOyAgLy9kZXBvbGFyaXphdGlvbiB3aXRoaW4gdGhlIHZlZ2V0YXRpb24gCgovL3JldHVybiBbIHZhbHVlIF0gLy9HcmF5c2NhbGUgcmVzdWx0CgovLyBDb2xvdXIgc2NhbGUKcmV0dXJuIGNvbG9yQmxlbmQgLy8gY2FsbCB0aGUgY29sb3JCbGVuZCBmdW5jdGlvbgoodmFsdWUsIC8vIFBpeGVsIHZhbHVlClswLCAwLjEsIDAuMywgMC41LCAwLjcsIDAuOSwgMS4wXSwgLy8gRGVmaW5lIHRoZSBib3JkZXJzClsgWzAsIDAsIDFdLCAvLyBEZWZpbmUgdGhlIFJHQiBjb2xvcnMgZm9yIGVhY2ggYm9yZGVyClswLjEsMC4yLDAuOF0sClswLjMsIDAuNSwgMC43XSwKWzAuMiwgMSwgMC4zXSwKWzAuNSwgMC44LCAwLjJdLApbMSwgMC40LCAwXSwKWzEsIDAsIDBdLApdKTs%3D){:target="_blank"} 


## General description of the script

The goal of the script is to calculate the Radar Vegetation Index for Sentinel-1 (RVI4S1) like dual-pol SAR data. In this script, we utilize Sentinel-1 GRD products as input and calculate the RVI4S1 index for monitoring crop growth. The theoretical value of this index ranges from 0 to 1. The bare soil or pure elementary targets indicate a very low RVI4S1 index towards zero. Conversely, a fully developed crop canopy advance the index towards 1. The index is represented with a colour scale equivalent to a jet colour map scheme. So, zero value is indicated by blue, whereas red indicates RVI4S1 ==1.0.

## Details of the script

The script is applicable to monitor crop condition over the global scale and invariant to crop types. The vegetation indices developed here utilize the GRD product. First, an equivalent to the degree of polarization (DOP) is calculated as VV/SPAN. SPAN is total power received at both the channel and can be treated as VV+VH. The DOP is utilized to obtain the depolarized fraction as m = 1 ñ DOP. The m factor ranges between 0 and 1. For pure or elementary targets the m value is close to zero; whereas for fully random canopy (at high vegetative growth), it reaches close to 1. This m factor is multiplied with the vegetation depolarization power fraction (4xVH)/(VV+VH). The m factor is modulated with a square root scaling for a better dynamic range of the RVI4S1 index. The index also separates urban areas and bare soil from the vegetated terrain. However, for very rough soil (likely after tillage) or water surface (high windy condition), the DOP would be lower, which turns the RVI4S1 to be quite higher than a smooth surface. Hence care should be taken with this particular condition.

## Author of the script

Dipankar Mandal

## Description of representative images

1) Manitoba province, Canada

The representative image of RVI4S1 generated by EO Browser custom script. It shows the start of the season (11 May) to high vegetative growth condition (22 July) of summer 2019 in Manitoba province, Canada. This region is dominating by cereal crops (wheat, oats, barley), corn, canola and soybean. Throughout the growth season changes in RVI4S1 values are observed. The index changes from almost 0 to close to 1 as crop advanced.

![The script example 1](fig/Sentinel-1_AWS_(S1-AWS-IW-VVVH)-timelapse_Canada.gif)

2) Andhra Pradesh, India

The representative image of RVI4S1 generated by EO Browser custom script. It shows the start of the season (17 June) to high vegetative growth condition (08 November) of monsoon 2018 in Andhra Pradesh, India. This region is dominating by rice. Throughout the growth season changes in RVI4S1 values are observed. The index changes from almost 0 to close to 1 as crop advanced.

![The script example 2](fig/Sentinel-1_AWS_(S1-AWS-IW-VVVH)-timelapse_India.gif)