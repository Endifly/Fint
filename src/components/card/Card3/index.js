import React, { useState } from 'react';
import Preview from './Preview';
import Detail from './Detail';
function Card3(probs) {

  if (probs.type == 'preview') {
    return (
      <Preview/>
    )
  }
  if (probs.type == 'detail') {
    return (
      <Detail/>
    )
  }
}
export default Card3;