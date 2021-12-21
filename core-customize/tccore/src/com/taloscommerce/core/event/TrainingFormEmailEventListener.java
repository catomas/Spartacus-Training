/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
package com.taloscommerce.core.event;


import com.taloscommerce.core.model.TrainingFormEmailProcessModel;
import de.hybris.platform.acceleratorservices.site.AbstractAcceleratorSiteEventListener;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.commerceservices.enums.SiteChannel;
import de.hybris.platform.processengine.BusinessProcessService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.util.ServicesUtil;
import org.springframework.beans.factory.annotation.Required;


/**
 * Listener for "forgotten password" functionality event.
 */
public class TrainingFormEmailEventListener extends AbstractAcceleratorSiteEventListener<TrainingFormEmailEvent>
{

	private ModelService modelService;
	private BusinessProcessService businessProcessService;


	protected BusinessProcessService getBusinessProcessService()
	{
		return businessProcessService;
	}

	@Required
	public void setBusinessProcessService(final BusinessProcessService businessProcessService)
	{
		this.businessProcessService = businessProcessService;
	}

	/**
	 * @return the modelService
	 */
	protected ModelService getModelService()
	{
		return modelService;
	}

	/**
	 * @param modelService
	 *           the modelService to set
	 */
	@Required
	public void setModelService(final ModelService modelService)
	{
		this.modelService = modelService;
	}

	@Override
	protected void onSiteEvent(final TrainingFormEmailEvent event)
	{
		 final TrainingFormEmailProcessModel trainingFormEmailProcessModel = (TrainingFormEmailProcessModel) getBusinessProcessService()
				.createProcess("trainingFormEmail-" + event.getMailTo() + "-" + System.currentTimeMillis(),
						"trainingFormEmailProcess");

		trainingFormEmailProcessModel.setMailTo(event.getMailTo());
		trainingFormEmailProcessModel.setMailSubject(event.getMailSubject());
		trainingFormEmailProcessModel.setMessage(event.getMessage());
		trainingFormEmailProcessModel.setCurrency(event.getCurrency());
		trainingFormEmailProcessModel.setSite(event.getSite());
		trainingFormEmailProcessModel.setStore(event.getBaseStore());
		trainingFormEmailProcessModel.setLanguage(event.getLanguage());
		trainingFormEmailProcessModel.setCustomer(event.getCustomer());


		getModelService().save(trainingFormEmailProcessModel);
		getBusinessProcessService().startProcess(trainingFormEmailProcessModel);
	}

	@Override
	protected SiteChannel getSiteChannelForEvent(final TrainingFormEmailEvent event)
	{
		final BaseSiteModel site = event.getSite();
		ServicesUtil.validateParameterNotNullStandardMessage("event.site", site);
		return site.getChannel();
	}
}
