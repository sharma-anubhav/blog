---
layout: Xpost
title:  Detecting COVID-19 from X-Ray Images using CNN
date:   2020-07-15 04:55:58 +0800
image:  covid.jpg
tags:   [HTML , javascript]
---
## ABSTRACT
We use a dataset of X-ray images from patients with common bacterial pneumonia, confrmed Covid-19 disease, and
normal incidents, for the automatic detection of the Coronavirus disease. The pneumonia class was also introduced in order to check the accuracy when compared to other lung diseases whose X-Ray image might look similar. This will be done by testing various CNN models with the aim being to improve upon the performance of that of a single model by using certain techniques and observations and apply that to predict the final results.

### Dataset
The dataset used is obtained from [Kaggle](https://www.kaggle.com/tawsifurrahman/covid19-radiography-database).
it conrains 219 covid-19 confirmed X-Ray images along with images of normal and pneumonia X-Ray data around 1200 each.
Out of this we choose equal number i.e 150 images from each category to train our models on , 20 images were used as validation data and the rest is used as test data as per requirement in my case 53+600+600.
The directory structure for my data is available at [github]().

#### Transfer lerarning
We currently have many state of the art CNNs available that perform classification tasks efficiently. The aim here is to fine tune these models and get results and get the best model for out task.
For all The models except Xception (pun intended) the images were rescaled to a size of 224X224 and for Xception it was 299X299.

The results obtained after fine tuning the popular CNN models used for classification are given below:

<table id="tableCss2">
  <tr>
    <th>Network</th>
    <th>Accuracy(%)</th>
  </tr>
  <tr>
    <td>VGG16</td>
    <td>90.5027</td>
  </tr>
  <tr>
    <td>VGG19</td>
    <td>92.6576</td>
  </tr>
  <tr>
    <td>MobileNetV2</td>
    <td>91.3008</td>
  </tr>
  <tr>
    <td>ResNet50</td>
    <td>92.0191</td>
  </tr>
  <tr>
    <td>Xception</td>
    <td>88.7470</td>
  </tr>
</table>

#### Ensambling
Here we take the average of the prediction probabilities given by two models for a given sample and predict the class according to theis value.
In simpler terms, in case the prediction given by two models differ, the image is classified according to the model that is more sure of its prediction value.

Here are some of the ensambles that i created:


<table id="tableCss2">
  <tr>
    <th>Ensample</th>
    <th>Accuracy(%)</th>
  </tr>
  <tr>
    <td>VGG19 & ResNet50</td>
    <td>93.0566</td>
  </tr>
  <tr>
    <td>VGG19 & VGG16</td>
    <td>92.8970</td>
  </tr>
  <tr>
    <td>MobileNetV2 & VGG16</td>
    <td>92.0191</td>
  </tr>
  <tr>
    <td>ResNet50 & MobileNetV2</td>
    <td>93.2961</td>
  </tr>

</table>

All of these seem to show increase in the accuracy as compared to their original base models. Particularly the ResNet50 & MobileNetV2 ensambles that gives better results than all the models.

| [![VGG19]({{site.baseurl}}/img/vgg19CM.png)]()  | [![Ensamble]({{site.baseurl}}/img/ensambledCM.png)]()|
|:---:|:---:|
| Confusion Matrix of VGG19 | Confusion Matrix of ResNet50 & MobileNetV2 ensamble |

#### Selective Combination
Now we make a new model with the prediction for normal class from the eansambled model and the rest from VGG19.
Final Model:

| [![VGG19]({{site.baseurl}}/img/finalCM.png)]()  | As can be seen from the confusion matrices the precision of each class has increased in the final model compared along with the overall accuracy of the model.Now this model will be used to make the predictions|
|:---:|:---:|
| Confusion Matrix of final model | Result |

#### The Proposed model gives us an Accuracy of 94.0144%

**** All the above results were obtained from data on which the models were not trained on (out sample data). Hence the models performance is not affected by any overfitting that might have occured.

Now we are ready to use the model for prediction purpose:
This can be found on my [github]() repository along with all the required code and documentation for the same.


### DISCUSSION
the proposed method is based on a very limited dataset where only 150 images were used to train a single category. Also the test data used was unblanced which does not affect the performance but may affect the precision of COVID class.
With around 150 trainig images we are able to get over 90% accuracy for Covid-19 detection among 2 other classes.  
Based on the results, it is demonstrated that deep learning with CNNs may have signifcant efects on the automatic detection and automatic extraction of essential features from X-ray images, related to the diagnosis of the Covid-19.
it is necessary to develop models capable of distinguishing Covid-19 cases from other similar viral cases, such as SARS, but also from a greater variety of common pneumonia or even physiological X-rays.










