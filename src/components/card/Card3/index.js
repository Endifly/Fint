import React, { useState } from 'react';
import Preview from './Preview';
import Detail from './Detail';
function Card3(probs) {

  if (probs.type == 'preview') {
    return (
      <Preview onPress={probs.onPress}/>
    )
  }
  if (probs.type == 'detail') {
    return (
      <Detail onPress={probs.onPress}/>
    )
  }
}
export default Card3;