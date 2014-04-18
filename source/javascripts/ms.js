var msValue = 0;
var msBases = 1;
var msRatios = (1+ Math.sqrt(5))/2;

function ms(value, bases, ratios) {

  if (typeof value === 'string') {
    value = 1;
  }
  if (value == undefined) {
    value = msValue;
  }
  if (bases == undefined) {
    bases = msBases;
  }
  if (ratios == undefined) {
    ratios = msRatios;
  }

  for (var ratio = 0; ratio < ratios.length; ratio++) {
    for (var base = 0; base < bases.length; base++) {
      console.log(ratio, base);
    }
  }

  // (r^v)*b
  return Math.pow(ratios, value) * bases;
}


//   def ms_gem_func(value, bases, ratios)
//     rratios.each do |ratio|
//       rbases.each do |base|

//         base_counter = 0

//         # Seed list with an initial value
//         r << base

//         # Find values on a positive scale
//         if rvalue >= 0
//           # Find higher values on the scale
//           i = 0;
//           while ((ratio ** i) * base) >= (rbases[0])
//             r << (ratio ** i) * base
//             i = i - 1;
//           end

//           # Find lower possible values on the scale
//           i = 0;
//           while ((ratio ** i) * base) <= ((ratio ** (rvalue + 1)) * base)
//             r << (ratio ** i) * base
//             i = i + 1;
//           end

//         else

//           # Find lower values on the scale
//           i = 0;
//           while ((ratio ** i) * base) <= (rbases[0])
//             r << (ratio ** i) * base
//             i = i + 1;
//           end

//           # Find higher possible values on the scale
//           i = 0;
//           while ((ratio ** i) * base) >= ((ratio ** (rvalue - 1)) * base)
//             r << (ratio ** i) * base
//             i = i - 1;
//           end
//         end

//       end
//     end

//     # Sort and trim
//     r.sort!
//     r.uniq!


//     if rvalue < 0
//       r = r.keep_if { |a| a <= rbases[0] }
//       # Final value
//       r = r[(rvalue - 1)]
//     else
//       r = r[rvalue]
//     end


//     Sass::Script::Number.new(r)
//   end