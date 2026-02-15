import fs from "fs";

// fs module ka use karke hum duplex nhi kar skte hai
// duplex ke through 


//stream ek object hai

// duplex have both mechanism write and read both


// duplex means ek aisa object jiss par write bhi ho skta hai write method call karke dusre point takh bhejega aur uske upar on ka use karke listen bhi kar skte hai

// readable and writable classes milte hai alag sai stream bana skte hai custom readable stream

import {Readable,Writable,Duplex,Transform,PassThrough} from 'stream';


// DUPLEX EK HIOBJECT HOTA HAI READ AND WRITE EK SATH


// KOI BHI SAMAN LEE JAA SKTA HAI


// EK DUPLEX STREAM HI TRANSFORM STREAM HOTI HAI


// DUPLEX HAI TOH LIKE READ HOGHA WRITE HOGHA LEKIN KUCH BHI HO SKTA HAI EK SATH

// BUT JO YEH TRANSFORM HAI USME FIX HAI JO READ HOGHA WAHI WRITE HOGHA

// IN TRANSFORM WHAT WE GET FROM READSTREAM OUTPUT THAT IS INPUT FOR WRITE STREAM


//  PASS THROUGH STREAM JO DATA LIA WAHI BHEJDIA JO READ HUA WAHI SEND KARDIA YEH TRANSFORM KA SPECIAL CASE HAI


// AGAR TRUE TRANSFORM STREAM MAI PANI KO ICE KE FORM MAI SEND KIA IT JUST AN ANALOGY 









// IN DUPLEX 2 stream have read and write
//JO READ STREAM SAI DATA AYEE WAHI BHEJA TOH PASSTHROUGH
// JABH DATA KO TRANSFORM KARKE BHEJO TOH TRANSFORM STREAM



// DUPLEX HAVE 2 INTERNAL BUFFERS 