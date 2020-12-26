GoodJob.preserve_job_records = true
GoodJob.retry_on_unhandled_error = false
GoodJob.on_thread_error = ->(exception) { Rails.logger.error("Caught a Job Exception:\n\t#{exception.message}") }
GoodJob.logger = Rails.logger
