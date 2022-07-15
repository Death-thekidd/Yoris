import {
  addressCheck,
  nameCheck,
  phoneCheck,
} from "../../../../util/valueValidator";

/** Validate Pickup input or validate when  isMultiple
 * @params values input State
 * @params params isMultiple Boolean will be true if its a multiple to multiple logistics
 */
const validateInputs = (values, params, isMultiple, setError) => {
  if (!values || values === null) return setError(true);
  if (!addressCheck(values?.address || values?.trackingId))
    return setError({
      [params.isInternationalActive ? "trackingId" : "address"]: true,
    });

  if (isMultiple) {
    if (
      !values?.dropOff ||
      !addressCheck(!values?.dropOff.address ? "" : values?.dropOff.address)
    )
      return setError({ ["dropOffAddress"]: true });

    if (
      !values?.dropOff ||
      !values?.dropOff.receiversName ||
      !nameCheck(values?.dropOff.receiversName && values?.dropOff.receiversName)
    )
      return setError({
        receiversName: true,
      });

    if (
      !values.dropOff ||
      !values?.dropOff.receiversPhone ||
      !phoneCheck(
        values?.dropOff.receiversPhone && values?.dropOff.receiversPhone
      )
    )
      return setError({ receiversPhone: true });
  }
  return true;
};

export default validateInputs;
