var inBrowser = typeof window !== 'undefined'
var UA = inBrowser && window.navigator.userAgent.toLowerCase()
var isIE = UA && /msie|trident/.test(UA)
var isIE9 = UA && UA.indexOf('msie 9.0') > 0
var isEdge = UA && UA.indexOf('edge/') > 0
var isAndroid = UA && UA.indexOf('android') > 0
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA)
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge

if(isIE){
	console.log('this is IE browser !')
}
if(isIE9){
	console.log('this is IE9 browser !')
}
if(isEdge){
	console.log('this is Edge browser !')
}
if(isAndroid){
	console.log('this is android browser !')
}
if(isIOS){
	console.log('this is ios browser !')
}
if(isChrome){
	console.log('this is Chrome browser !')
}

var EventUtil={
	addEvent: function(element,type,handler){
    	if(element.addEventListener){
    		element.addEventListener(type,handler,false);
    	}else if(element.attachEvent){
    		element.attachEvent('on'+type,function(){
    			handler.call(element);
    		})
    	}else{
    		element['on'+type]=handler;
    	}
    },
    removeEvent: function(element,type,handler){
    	if(element.removeEventListener){
    		element.removeEventListener(type,handler,false);
    	}else if(element.detachEvent){
    		element.detachEvent('on'+type,function(){
    			handler.call(element);
    		})
    	}else{
    		element['on'+type]=null;
    	}
    }
}


// 冒泡排序
function bubbleSort(arr){
	var len=arr.length-1;
	var count=0;
	function swap(arr,i,j){
		var temp=arr[i];
		arr[i]=arr[j];
		arr[j]=temp;
		count++;
	}
	for(var n=0;n<len;n++){
		for(var k=0;k<len-n;k++){
			if(arr[k]>arr[k+1]){
				swap(arr,k,k+1)
				console.log(arr)
			}
		}
	}
	console.log(count);
	return arr;
}

// 插入排序
function insertionSort(arr){
	var len=arr.length;
	var preIndex,current,count=0;
	for(var i=1;i<len;i++){
		preIndex=i-1;
		current=arr[i];
		while(preIndex>=0 && arr[preIndex]>current){
			arr[preIndex+1]=arr[preIndex];
			preIndex--
			
			count++
		}
		arr[preIndex+1]=current;
		count++;
		console.log(arr);
	}
	console.log(count)
	return arr;
}

// 归并排序

function mergeSort(arr) {  // 采用自上而下的递归方法
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}


// 选择排序

function selectionSort(arr){
	var len=arr.length-1;
	var minIndex,count=0;

	function swap(arr,i,j){
		var temp=arr[i];
		arr[i]=arr[j];
		arr[j]=temp;
		count++;
		console.log(arr)
	}

	for(var i=0;i<len;i++){
		minIndex=i;
		for(var j=i+1;j<len;j++){
			if(arr[minIndex]>arr[j]){
				minIndex=j
			}
		}
		swap(arr,i,minIndex);
		
	}
	console.log(count);
	return arr;
}
