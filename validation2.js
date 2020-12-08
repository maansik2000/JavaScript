const Joi = require('joi');

const arrayString = ['banana','bacon','cheese'];
const arrayObjects =[
  {
    example : 'example'
  },
  {
    example : 'example2'
  }
];

const userInput = {
  personalInfo : {
    streetAddress : '12345456',
    city : 'jaipur',
    state : 'rajasthan'
  },
  preferances : arrayString
};

const personalInfoSchema = Joi.object().keys({
  streetAddress : Joi.string().trim().required(),
  city : Joi.string().trim().required(),
  state : Joi.string().trim().length(2).required()
});

const preferancesSchema = Joi.array().items(Joi.string());

const schema = Joi.object().keys({
  personalInfo : personalInfoSchema,
  preferances : preferancesSchema
});

schema.validate(userInput,schema,(err,result)=>{
  if(err){
    console.log(err);
  }else{
    console.log(result);
  }
});