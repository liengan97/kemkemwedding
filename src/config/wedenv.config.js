class WedEnv {

  // Storage
  static WISHES_COLLECTION_NAME = process.env.WISHES_COLLECTION_NAME || "wishes";
  static REQUEST_LOGS_COLLECTION_NAME = process.env.REQUEST_LOGS_COLLECTION_NAME || "req_logs";

  // App
  static WED_COUNT_DOWN_T0_DATE = process.env.WED_COUNT_DOWN_T0_DATE || "2026-06-14"

  // Rate limit
  static RATE_LIMIT_WINDOW = 1 * 60 * 1000
  static RATE_LIMIT_MAX_REQUEST_PER_WINDOW = 5
}

export default WedEnv;
