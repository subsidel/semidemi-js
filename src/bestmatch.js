var SemiDemi = (function (SemiDemi) {

  // Find the best match of a useragent string against an array of SemiDemi Matcher structures.
  // Returns the best matching matcher, or null if no match can be found.
  // The Matcher structure is an array of objects, each of which has a single property.
  // The properties can be one of:
  // invariant: a string that must be exactly present in the ua for it to match
  // fuzzy: a string that can be approximately matched. The closer the match, the more likely this matcher is to be chosen as best.
  // disallowed: a string that must _not_ be present in the ua for it to match
  // version: a string prefix that will be followed by a version number. The version number will be ignored in matching.
  SemiDemi.bestMatch = function (matchers, ua) {
    return null;
  };

  return SemiDemi;

} ( SemiDemi || {} ));
