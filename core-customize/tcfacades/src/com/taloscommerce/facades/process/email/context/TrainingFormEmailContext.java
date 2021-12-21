/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
package com.taloscommerce.facades.process.email.context;


import com.taloscommerce.core.model.TrainingFormEmailProcessModel;
import de.hybris.platform.acceleratorservices.model.cms2.pages.EmailPageModel;
import de.hybris.platform.acceleratorservices.process.email.context.AbstractEmailContext;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.core.model.c2l.LanguageModel;
import de.hybris.platform.core.model.user.CustomerModel;


/**
 * Velocity context for a customer email.
 */
public class TrainingFormEmailContext extends AbstractEmailContext<TrainingFormEmailProcessModel>
{
	public static final String EMAIL_SUBJECT = "subject";
	public static final String EMAIL_MESSAGE = "message";

	public String getEmailSubject(){
		return (String) get(EMAIL_SUBJECT);
	}

	public String getEmailMessage(){
		return (String) get(EMAIL_MESSAGE);
	}

	@Override
	public void init(final TrainingFormEmailProcessModel trainingFormEmailProcessModel , final EmailPageModel emailPageModel) {
		super.init(trainingFormEmailProcessModel, emailPageModel);
		put(DISPLAY_NAME, getCustomer(trainingFormEmailProcessModel).getDisplayName());
		put(EMAIL, trainingFormEmailProcessModel.getMailTo());
		put(EMAIL_SUBJECT, trainingFormEmailProcessModel.getMailSubject());
		put(EMAIL_MESSAGE, trainingFormEmailProcessModel.getMessage());

	}

	@Override
	protected BaseSiteModel getSite(TrainingFormEmailProcessModel businessProcessModel) {
		return businessProcessModel.getSite();
	}

	@Override
	protected CustomerModel getCustomer(TrainingFormEmailProcessModel businessProcessModel) {
		return businessProcessModel.getCustomer();
	}

	@Override
	protected LanguageModel getEmailLanguage(TrainingFormEmailProcessModel businessProcessModel) {
		return businessProcessModel.getLanguage();
	}


}
