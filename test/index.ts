import * as validator from 'validator';

let any: any;

// **************
// * Validators *
// **************

{
  let result: boolean;

  result = validator.contains('sample', 'sample');

  result = validator.equals('sample', 'sample');

  result = validator.isAfter('sample');
  result = validator.isAfter('sample', new Date().toString());

  result = validator.isAlpha('sample');
  result = validator.isAlpha('sample', 'sample-local');

  result = validator.isAlphanumeric('sample');
  result = validator.isAlphanumeric('sample', 'sample-local');

  result = validator.isAscii('sample');

  result = validator.isBase64('sample');

  result = validator.isBefore('sample');
  result = validator.isBefore('sample', new Date().toString());

  result = validator.isBoolean('sample');

  let isByteLengthOptions: validator.IsByteLengthOptions;
  result = validator.isByteLength('sample', isByteLengthOptions);
  result = validator.isByteLength('sample', 0);
  result = validator.isByteLength('sample', 0, 42);

  result = validator.isCreditCard('sample');

  let isCurrencyOptions: validator.IsCurrencyOptions;
  result = validator.isCurrency('sample');
  result = validator.isCurrency('sample', isCurrencyOptions);

  result = validator.isDataURI('sample');

  result = validator.isDecimal('sample');

  result = validator.isDivisibleBy('sample', 2);

  let isEmailOptions: validator.IsEmailOptions;
  result = validator.isEmail('sample');
  result = validator.isEmail('sample', isEmailOptions);

  let isFQDNOptions: validator.IsFQDNOptions;
  result = validator.isFQDN('sample');
  result = validator.isFQDN('sample', isFQDNOptions);

  let isFloatOptions: validator.IsFloatOptions;
  result = validator.isFloat('sample');
  result = validator.isFloat('sample', isFloatOptions);

  result = validator.isFullWidth('sample');

  result = validator.isHalfWidth('sample');

  result = validator.isHexColor('sample');

  result = validator.isHexadecimal('sample');

  result = validator.isIP('sample');
  result = validator.isIP('sample', 6);

  result = validator.isISBN('sample');
  result = validator.isISBN('sample', 13);

  result = validator.isISIN('sample');

  result = validator.isISO8601('sample');

  result = validator.isIn('sample', []);

  let isIntOptions: validator.IsIntOptions;
  result = validator.isInt('sample');
  result = validator.isInt('sample', isIntOptions);

  result = validator.isJSON('sample');

  let isLengthOptions: validator.IsLengthOptions;
  result = validator.isLength('sample', isLengthOptions);
  result = validator.isLength('sample', 3);
  result = validator.isLength('sample', 3, 5);

  result = validator.isLowercase('sample');

  result = validator.isMACAddress('sample');

  result = validator.isMD5('sample');

  result = validator.isMobilePhone('sample', 'en-US');

  result = validator.isMongoId('sample');

  result = validator.isMultibyte('sample');

  result = validator.isEmpty('sample');

  result = validator.isNumeric('sample');

  result = validator.isSurrogatePair('sample');

  let isURLOptions: validator.IsURLOptions;
  result = validator.isURL('sample');
  result = validator.isURL('sample', isURLOptions);

  result = validator.isUUID('sample');
  result = validator.isUUID('sample', 5);
  result = validator.isUUID('sample', 'all');

  result = validator.isUppercase('sample');

  result = validator.isVariableWidth('sample');

  result = validator.isWhitelisted('sample', 'abc');
  result = validator.isWhitelisted('sample', ['a', 'b', 'c']);

  result = validator.matches('foobar', 'foo/i');
  result = validator.matches('foobar', 'foo', 'i');
}

// **************
// * Sanitizers *
// **************

{
  let result: string;

  result = validator.blacklist('sample', 'abc');

  result = validator.escape('sample');

  result = validator.unescape('sample');

  result = validator.ltrim('sample');
  result = validator.ltrim('sample', ' ');

  let normalizeEmailOptions: validator.NormalizeEmailOptions;
  result = validator.normalizeEmail('sample');
  result = validator.normalizeEmail('sample', normalizeEmailOptions);

  result = validator.rtrim('sample');
  result = validator.rtrim('sample', ' ');

  result = validator.stripLow('sample');
  result = validator.stripLow('sample', true);
}

{
  let result: boolean;

  result = validator.toBoolean(any);
  result = validator.toBoolean(any, true);
}

{
  let result: Date;

  result = validator.toDate(any);
}

{
  let result: number;

  result = validator.toFloat(any);

  result = validator.toInt(any);
  result = validator.toInt(any, 10);
}

{
  let result: string;

  result = validator.trim('sample');
  result = validator.trim('sample', ' ');

  result = validator.whitelist('sample', 'abc');
}

// **************
// * Extensions *
// **************

validator.extend<(str: string, options: {}) => boolean>('isTest', (str: any, options: {}) => !str);
